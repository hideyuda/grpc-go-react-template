package interactor

import (
	"database/sql"
	"fmt"
	"log"
	"strings"

	"github.com/hidenari-yuda/grpc-go-react-template/pb"
	"github.com/hidenari-yuda/grpc-go-react-template/usecase"
	"github.com/pkg/errors"
)

type ContentInteractor interface {
	// Gest API
	// Create
	Create(param *pb.Content) (*pb.Content, error)

	// Update
	Update(param *pb.Content) (bool, error)

	// update impression
	UpdateImpressionByIdList(param *pb.ContentIdListRequest) (bool, error)

	// update view
	UpdateView(param *pb.ContentIdRequest) (bool, error)

	// update click
	UpdateClick(param *pb.ContentIdRequest) (bool, error)

	// update like
	CreateLike(param *pb.ContentIdAndUserIdRequest) (bool, error)

	// delete like
	DeleteLike(param *pb.ContentIdAndUserIdRequest) (bool, error)

	// Delete
	Delete(param *pb.ContentIdRequest) (bool, error)

	// Get
	GetById(param *pb.ContentIdRequest) (*pb.Content, error)

	// get by uuid
	GetByUuid(param *pb.ContentUuidRequest) (*pb.Content, error)

	// get by uuid and user id
	GetByUuidAndUser(param *pb.ContentUuidAndUserIdRequest) (*pb.Content, error)

	// get list by user id
	GetListByUser(param *pb.ContentUserIdRequest) ([]*pb.Content, error)

	// get by type
	GetListBySearch(param *pb.ContentSearchRequest) ([]*pb.Content, error)

	// get latest id=user_id
	GetLatestList() ([]*pb.Content, error)

	// get trend list by user id
	GetTrendList() ([]*pb.Content, error)

	// get recommended list by user id
	GetRecommendedListByUser(param *pb.ContentUserIdRequest) ([]*pb.Content, error)

	// get recommended list by content id
	GetRecommendedListByContent(param *pb.ContentIdRequest) ([]*pb.Content, error)

	// get sold list by user id
	GetSoldListByUser(param *pb.ContentSearchRequest) ([]*pb.Content, error)

	// get purchased list by user id
	GetPurchasedListByUser(param *pb.ContentSearchRequest) ([]*pb.Content, error)

	// get liked list by user id
	GetLikedListByUser(param *pb.ContentSearchRequest) ([]*pb.Content, error)

	// get list by id list
	GetListByIdList(param *pb.ContentIdListRequest) ([]*pb.Content, error)
}

type ContentInteractorImpl struct {
	firebase                     usecase.Firebase
	contentRepository            usecase.ContentRepository
	contentContentRepository     usecase.ContentDetailRepository
	contentToolRepository        usecase.ContentToolRepository
	contentCategoryRepository    usecase.ContentCategoryRepository
	contentSubCategoryRepository usecase.ContentSubCategoryRepository
	likeRepository               usecase.LikeRepository
}

func NewContentInteractorImpl(
	fb usecase.Firebase,
	cR usecase.ContentRepository,
	cdR usecase.ContentDetailRepository,
	ctR usecase.ContentToolRepository,
	ccR usecase.ContentCategoryRepository,
	cscR usecase.ContentSubCategoryRepository,
	lR usecase.LikeRepository,
) ContentInteractor {
	return &ContentInteractorImpl{
		firebase:                     fb,
		contentRepository:            cR,
		contentContentRepository:     cdR,
		contentToolRepository:        ctR,
		contentCategoryRepository:    ccR,
		contentSubCategoryRepository: cscR,
		likeRepository:               lR,
	}
}

func (i *ContentInteractorImpl) Create(param *pb.Content) (*pb.Content, error) {

	if err := i.contentRepository.Create(param); err != nil {
		return param, err
	}

	for _, detail := range param.Details {
		detail.ContentId = param.Id
		if err := i.contentContentRepository.Create(detail); err != nil {
			return param, err
		}
	}

	for _, tool := range param.Tools {
		tool.ContentId = param.Id
		if err := i.contentToolRepository.Create(tool); err != nil {
			return param, err
		}
	}

	for _, category := range param.Categories {
		category.ContentId = param.Id
		if err := i.contentCategoryRepository.Create(category); err != nil {
			return param, err
		}
	}

	for _, subCategory := range param.SubCategories {
		subCategory.ContentId = param.Id
		if err := i.contentSubCategoryRepository.Create(subCategory); err != nil {
			return param, err
		}
	}

	return param, nil
}

func (i *ContentInteractorImpl) Update(param *pb.Content) (bool, error) {

	if err := i.contentRepository.Update(param); err != nil {
		return false, err
	}

	if err := i.contentContentRepository.DeleteByContent(param.Id); err != nil {
		return false, err
	}

	for _, detail := range param.Details {
		detail.ContentId = param.Id
		if err := i.contentContentRepository.Create(detail); err != nil {
			return false, err
		}
	}

	if err := i.contentToolRepository.DeleteByContent(param.Id); err != nil {
		return false, err
	}

	for _, tool := range param.Tools {
		tool.ContentId = param.Id
		if err := i.contentToolRepository.Create(tool); err != nil {
			return false, err
		}
	}

	if err := i.contentCategoryRepository.DeleteByContent(param.Id); err != nil {
		return false, err
	}

	for _, category := range param.Categories {
		category.ContentId = param.Id
		if err := i.contentCategoryRepository.Create(category); err != nil {
			return false, err
		}
	}

	if err := i.contentSubCategoryRepository.DeleteByContent(param.Id); err != nil {
		return false, err
	}

	for _, subCategory := range param.SubCategories {
		subCategory.ContentId = param.Id
		if err := i.contentSubCategoryRepository.Create(subCategory); err != nil {
			return false, err
		}
	}

	return true, nil
}

// update impression by id list
func (i *ContentInteractorImpl) UpdateImpressionByIdList(param *pb.ContentIdListRequest) (bool, error) {
	var (
		err            error
		paramIdListStr string
	)

	paramIdListStr = strings.Trim(strings.Join(strings.Fields(fmt.Sprint(param.Id)), ", "), "[]")

	if err = i.contentRepository.UpdateImpressionByIdList(paramIdListStr); err != nil {
		return false, err
	}

	return true, nil
}

// update view
func (i *ContentInteractorImpl) UpdateView(param *pb.ContentIdRequest) (bool, error) {

	if err := i.contentRepository.UpdateView(param.Id); err != nil {
		return false, err
	}

	return true, nil
}

// update click
func (i *ContentInteractorImpl) UpdateClick(param *pb.ContentIdRequest) (bool, error) {

	if err := i.contentRepository.UpdateClick(param.Id); err != nil {
		return false, err
	}

	return true, nil
}

// update like
func (i *ContentInteractorImpl) CreateLike(param *pb.ContentIdAndUserIdRequest) (bool, error) {

	if err := i.contentRepository.CreateLike(param.Id); err != nil {
		return false, err
	}

	like := &pb.Like{
		ContentId: param.Id,
		UserId:    param.UserId,
	}

	if err := i.likeRepository.Create(like); err != nil {
		return false, err
	}

	return true, nil
}

// update like
func (i *ContentInteractorImpl) DeleteLike(param *pb.ContentIdAndUserIdRequest) (bool, error) {

	if err := i.contentRepository.DeleteLike(param.Id); err != nil {
		return false, err
	}

	if err := i.likeRepository.DeleteByUserAndContent(param.UserId, param.Id); err != nil {
		return false, err
	}

	return true, nil
}

func (i *ContentInteractorImpl) Delete(param *pb.ContentIdRequest) (bool, error) {

	err := i.contentRepository.Delete(param.Id)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (i *ContentInteractorImpl) GetById(param *pb.ContentIdRequest) (*pb.Content, error) {
	var (
		content *pb.Content
		err     error
	)

	content, err = i.contentRepository.GetById(param.Id)
	if err != nil {
		log.Println(err)
		return content, err
	}

	details, err := i.contentContentRepository.GetListByContent(content.Id)
	if err != nil {
		log.Println(err)
		return content, err
	}

	tools, err := i.contentToolRepository.GetListByContent(content.Id)
	if err != nil {
		log.Println(err)
		return content, err
	}

	categories, err := i.contentCategoryRepository.GetListByContent(content.Id)
	if err != nil {
		log.Println(err)
		return content, err
	}

	subCategories, err := i.contentSubCategoryRepository.GetListByContent(content.Id)
	if err != nil {
		log.Println(err)
		return content, err
	}

	content.Details = details
	content.Tools = tools
	content.Categories = categories
	content.SubCategories = subCategories

	return content, nil
}

func (i *ContentInteractorImpl) GetByUuid(param *pb.ContentUuidRequest) (*pb.Content, error) {
	var (
		content *pb.Content
		err     error
	)

	content, err = i.contentRepository.GetByUuid(param.Uuid)
	if err != nil {
		log.Println(err)
		return content, err
	}

	details, err := i.contentContentRepository.GetListByContent(content.Id)
	if err != nil {
		log.Println(err)
		return content, err
	}

	tools, err := i.contentToolRepository.GetListByContent(content.Id)
	if err != nil {
		log.Println(err)
		return content, err
	}

	categories, err := i.contentCategoryRepository.GetListByContent(content.Id)
	if err != nil {
		log.Println(err)
		return content, err
	}

	subCategories, err := i.contentSubCategoryRepository.GetListByContent(content.Id)
	if err != nil {
		log.Println(err)
		return content, err
	}

	content.Details = details
	content.Tools = tools
	content.Categories = categories
	content.SubCategories = subCategories

	return content, nil
}

func (i *ContentInteractorImpl) GetByUuidAndUser(param *pb.ContentUuidAndUserIdRequest) (*pb.Content, error) {
	var (
		content *pb.Content
		err     error
	)

	content, err = i.contentRepository.GetByUuid(param.Uuid)
	if err != nil {
		log.Println(err)
		return content, err
	}

	details, err := i.contentContentRepository.GetListByContent(content.Id)
	if err != nil {
		log.Println(err)
		return content, err
	}

	tools, err := i.contentToolRepository.GetListByContent(content.Id)
	if err != nil {
		log.Println(err)
		return content, err
	}

	categories, err := i.contentCategoryRepository.GetListByContent(content.Id)
	if err != nil {
		log.Println(err)
		return content, err
	}

	subCategories, err := i.contentSubCategoryRepository.GetListByContent(content.Id)
	if err != nil {
		log.Println(err)
		return content, err
	}

	isLiked, err := i.likeRepository.GetBoolByUserAndContent(param.UserId, content.Id)
	if errors.Is(err, sql.ErrNoRows) {
		isLiked = false
	}
	// } else if err != nil {
	// 	log.Println(err)
	// 	return content, err
	// }

	content.IsLiked = isLiked

	content.Details = details
	content.Tools = tools
	content.Categories = categories
	content.SubCategories = subCategories

	return content, nil
}

func (i *ContentInteractorImpl) GetListByUser(param *pb.ContentUserIdRequest) ([]*pb.Content, error) {
	var (
		contents []*pb.Content
		err      error
	)

	contents, err = i.contentRepository.GetListByUser(param.UserId)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	// details, err := i.contentContentRepository.GetListByUser(param.UserId)
	// if err != nil {
	// 	log.Println( err)
	// 	return contents, err
	// }

	tools, err := i.contentToolRepository.GetListByUser(param.UserId)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	categories, err := i.contentCategoryRepository.GetListByUser(param.UserId)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	subCategories, err := i.contentSubCategoryRepository.GetListByUser(param.UserId)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	for _, content := range contents {
		// for _, detail := range details {
		// 	if content.Id == detail.ContentId {
		// 		content.Details = append(content.Details, detail)
		// 	}
		// }
		for _, tool := range tools {
			if content.Id == tool.ContentId {
				content.Tools = append(content.Tools, tool)
			}
		}
		for _, category := range categories {
			if content.Id == category.ContentId {
				content.Categories = append(content.Categories, category)
			}
		}
		for _, subCategory := range subCategories {
			if content.Id == subCategory.ContentId {
				content.SubCategories = append(content.SubCategories, subCategory)
			}
		}
	}

	return contents, nil
}

// get by type
// rpc GetListByCategory (paramCategoryRequest) returns (paramList) {}
func (i *ContentInteractorImpl) GetListBySearch(param *pb.ContentSearchRequest) ([]*pb.Content, error) {
	var (
		contents       []*pb.Content
		err            error
		paramIdList    []int64
		paramIdListStr string
	)

	// categoryStrList := strings.Trim(strings.Join(strings.Fields(fmt.Sprint(input.IdList)), ", "), "[]")

	if param.SortBy == pb.ContentSearchRequest_NEWEST {
		contents, err = i.contentRepository.GetNewestListByKeyword(param.Keyword)
		if err != nil {
			log.Println(err)
			return contents, err
		}
	} else if param.SortBy == pb.ContentSearchRequest_TOP {
		contents, err = i.contentRepository.GetTopListByKeyword(param.Keyword)
		if err != nil {
			log.Println(err)
			return contents, err
		}
	} else {
		contents, err = i.contentRepository.GetHottestListByKeyword(param.Keyword)
		if err != nil {
			log.Println(err)
			return contents, err
		}
	}

	for _, content := range contents {
		paramIdList = append(paramIdList, content.Id)
	}
	if len(paramIdList) == 0 {
		return contents, nil
	}
	paramIdListStr = strings.Trim(strings.Join(strings.Fields(fmt.Sprint(paramIdList)), ", "), "[]")

	// details, err := i.contentContentRepository.GetListByIdList(paramIdListStr)
	// if err != nil {
	// 	log.Println( err)
	// 	return contents, err
	// }

	tools, err := i.contentToolRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	categories, err := i.contentCategoryRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	subCategories, err := i.contentSubCategoryRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	for _, content := range contents {
		for _, tool := range tools {
			if content.Id == tool.ContentId {
				content.Tools = append(content.Tools, tool)
			}
		}
		for _, category := range categories {
			if content.Id == category.ContentId {
				content.Categories = append(content.Categories, category)
			}
		}
		for _, subCategory := range subCategories {
			if content.Id == subCategory.ContentId {
				content.SubCategories = append(content.SubCategories, subCategory)
			}
		}
	}

	var (
		matchedListByTool     []*pb.Content
		matchedListByCategory []*pb.Content
	)

	if len(param.Tool) == 0 {
		matchedListByTool = contents
	} else {
	toolLoop:
		for _, content := range contents {
			for _, toolFromParam := range param.Tool {
				for _, tool := range content.Tools {
					if int64(toolFromParam) == int64(tool.Tool) {
						matchedListByTool = append(matchedListByTool, content)
						continue toolLoop
					}
				}
			}
		}
	}

	if len(param.Category) == 0 {
		matchedListByCategory = matchedListByTool
	} else {
	categoryLoop:
		for _, content := range matchedListByTool {
			for _, categoryFromParam := range param.Category {
				for _, category := range content.Categories {
					if int64(categoryFromParam) == int64(category.Category) {
						matchedListByCategory = append(matchedListByCategory, content)
						continue categoryLoop
					}
				}
			}
		}
	}

	return matchedListByCategory, nil
}

// // get by latest id=user_id
// rpc GetLatestList(paramIdRequest) returns (paramList) {}
func (i *ContentInteractorImpl) GetLatestList() ([]*pb.Content, error) {
	var (
		contents       []*pb.Content
		err            error
		paramIdList    []int64
		paramIdListStr string
	)

	contents, err = i.contentRepository.GetLatestList()
	if err != nil {
		log.Println(err)
		return contents, err
	}

	for _, content := range contents {
		paramIdList = append(paramIdList, content.Id)
	}
	if len(paramIdList) == 0 {
		return contents, nil
	}
	paramIdListStr = strings.Trim(strings.Join(strings.Fields(fmt.Sprint(paramIdList)), ", "), "[]")

	// details, err := i.contentContentRepository.GetListByIdList(paramIdListStr)
	// if err != nil {
	// 	log.Println( err)
	// 	return contents, err
	// }

	tools, err := i.contentToolRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	categories, err := i.contentCategoryRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	subCategories, err := i.contentSubCategoryRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	for _, content := range contents {
		for _, tool := range tools {
			if content.Id == tool.ContentId {
				content.Tools = append(content.Tools, tool)
			}
		}
		for _, category := range categories {
			if content.Id == category.ContentId {
				content.Categories = append(content.Categories, category)
			}
		}
		for _, subCategory := range subCategories {
			if content.Id == subCategory.ContentId {
				content.SubCategories = append(content.SubCategories, subCategory)
			}
		}
	}

	return contents, nil
}

// // get by trend id=user_id
// rpc GetTrendList(paramIdRequest) returns (paramList) {}
func (i *ContentInteractorImpl) GetTrendList() ([]*pb.Content, error) {
	var (
		contents       []*pb.Content
		err            error
		paramIdList    []int64
		paramIdListStr string
	)

	contents, err = i.contentRepository.GetTrendList()
	if err != nil {
		log.Println(err)
		return contents, err
	}

	for _, content := range contents {
		paramIdList = append(paramIdList, content.Id)
	}

	if len(paramIdList) == 0 {
		return contents, nil
	}

	paramIdListStr = strings.Trim(strings.Join(strings.Fields(fmt.Sprint(paramIdList)), ", "), "[]")

	tools, err := i.contentToolRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	// categories, err := i.contentCategoryRepository.GetListByIdList(paramIdListStr)
	// if err != nil {
	// 	log.Println( err)
	// 	return contents, err
	// }

	// subCategories, err := i.contentSubCategoryRepository.GetListByIdList(paramIdListStr)
	// if err != nil {
	// 	log.Println( err)
	// 	return contents, err
	// }

	for _, content := range contents {
		log.Println("content is:", content)
		for _, tool := range tools {
			log.Println("tool is:", tool)
			if content.Id == tool.ContentId {
				log.Println("ok tool is:", tool)
				content.Tools = append(content.Tools, tool)
			}
		}
	}

	return contents, nil
}

// // get by recommend id=user_id
// rpc GetRecommendedListByUser(paramIdRequest) returns (paramList) {}
func (i *ContentInteractorImpl) GetRecommendedListByUser(param *pb.ContentUserIdRequest) ([]*pb.Content, error) {
	var (
		contents       []*pb.Content
		err            error
		paramIdList    []int64
		paramIdListStr string
	)

	contents, err = i.contentRepository.GetRecommendedListByUser(param.UserId)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	for _, content := range contents {
		paramIdList = append(paramIdList, content.Id)
	}

	if len(paramIdList) == 0 {
		return contents, nil
	}

	paramIdListStr = strings.Trim(strings.Join(strings.Fields(fmt.Sprint(paramIdList)), ", "), "[]")

	tools, err := i.contentToolRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	// categories, err := i.contentCategoryRepository.GetListByIdList(paramIdListStr)
	// if err != nil {
	// 	log.Println( err)
	// 	return contents, err
	// }

	// subCategories, err := i.contentSubCategoryRepository.GetListByIdList(paramIdListStr)
	// if err != nil {
	// 	log.Println( err)
	// 	return contents, err
	// }

	for _, content := range contents {
		log.Println("content is:", content)
		for _, tool := range tools {
			log.Println("tool is:", tool)
			if content.Id == tool.ContentId {
				content.Tools = append(content.Tools, tool)
			}
		}
	}

	return contents, nil
}

// get by recommend id=content_id
// rpc GetRecommendedListByContent(paramIdRequest) returns (paramList) {}
func (i *ContentInteractorImpl) GetRecommendedListByContent(param *pb.ContentIdRequest) ([]*pb.Content, error) {
	var (
		contents       []*pb.Content
		err            error
		paramIdList    []int64
		paramIdListStr string
	)

	contents, err = i.contentRepository.GetRecommendedListByContent()
	if err != nil {
		log.Println(err)
		return contents, err
	}

	for _, content := range contents {
		paramIdList = append(paramIdList, content.Id)
	}
	if len(paramIdList) == 0 {
		return contents, nil
	}
	paramIdListStr = strings.Trim(strings.Join(strings.Fields(fmt.Sprint(paramIdList)), ", "), "[]")

	// details, err := i.contentContentRepository.GetListByIdList(paramIdListStr)
	// if err != nil {
	// 	log.Println( err)
	// 	return contents, err
	// }

	tools, err := i.contentToolRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	categories, err := i.contentCategoryRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	subCategories, err := i.contentSubCategoryRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	for _, content := range contents {
		for _, tool := range tools {
			if content.Id == tool.ContentId {
				content.Tools = append(content.Tools, tool)
			}
		}
		for _, category := range categories {
			if content.Id == category.ContentId {
				content.Categories = append(content.Categories, category)
			}
		}
		for _, subCategory := range subCategories {
			if content.Id == subCategory.ContentId {
				content.SubCategories = append(content.SubCategories, subCategory)
			}
		}
	}

	return contents, nil
}

// // get by sold id=user_id
// rpc GetSoldListByUser(paramIdRequest) returns (paramList) {}
func (i *ContentInteractorImpl) GetSoldListByUser(param *pb.ContentSearchRequest) ([]*pb.Content, error) {
	var (
		contents       []*pb.Content
		err            error
		paramIdList    []int64
		paramIdListStr string
	)

	contents, err = i.contentRepository.GetSoldListByUser(param.UserId)
	if err != nil {
		log.Println(err)
		return contents, err
	}
	for _, content := range contents {
		paramIdList = append(paramIdList, content.Id)
	}
	if len(paramIdList) == 0 {
		return contents, nil
	}
	paramIdListStr = strings.Trim(strings.Join(strings.Fields(fmt.Sprint(paramIdList)), ", "), "[]")

	// details, err := i.contentContentRepository.GetListByIdList(paramIdListStr)
	// if err != nil {
	// 	log.Println( err)
	// 	return contents, err
	// }

	tools, err := i.contentToolRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	categories, err := i.contentCategoryRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	subCategories, err := i.contentSubCategoryRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	for _, content := range contents {
		for _, tool := range tools {
			if content.Id == tool.ContentId {
				content.Tools = append(content.Tools, tool)
			}
		}
		for _, category := range categories {
			if content.Id == category.ContentId {
				content.Categories = append(content.Categories, category)
			}
		}
		for _, subCategory := range subCategories {
			if content.Id == subCategory.ContentId {
				content.SubCategories = append(content.SubCategories, subCategory)
			}
		}
	}

	return contents, nil
}

// rpc GetPurchasedListByUser(paramIdRequest) returns (paramList) {}
func (i *ContentInteractorImpl) GetPurchasedListByUser(param *pb.ContentSearchRequest) ([]*pb.Content, error) {
	var (
		contents []*pb.Content
		err      error
	)

	contents, err = i.contentRepository.GetPurchasedListByUser(param.UserId)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	return contents, nil
}

// // get by liked id=user_id
// rpc GetLikedListByUser(paramIdRequest) returns (paramList) {}
func (i *ContentInteractorImpl) GetLikedListByUser(param *pb.ContentSearchRequest) ([]*pb.Content, error) {
	var (
		contents       []*pb.Content
		likedList      []*pb.Content
		err            error
		paramIdList    []int64
		paramIdListStr string
	)

	contents, err = i.contentRepository.GetLikedListByUser(param.UserId)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	for _, content := range contents {
		paramIdList = append(paramIdList, content.Id)
	}
	if len(paramIdList) == 0 {
		return contents, nil
	}
	paramIdListStr = strings.Trim(strings.Join(strings.Fields(fmt.Sprint(paramIdList)), ", "), "[]")

	// details, err := i.contentContentRepository.GetListByIdList(paramIdListStr)
	// if err != nil {
	// 	log.Println( err)
	// 	return contents, err
	// }

	tools, err := i.contentToolRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	categories, err := i.contentCategoryRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	subCategories, err := i.contentSubCategoryRepository.GetListByContentIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	for _, content := range contents {
		for _, tool := range tools {
			if content.Id == tool.ContentId {
				content.Tools = append(content.Tools, tool)
			}
		}
		for _, category := range categories {
			if content.Id == category.ContentId {
				content.Categories = append(content.Categories, category)
			}
		}
		for _, subCategory := range subCategories {
			if content.Id == subCategory.ContentId {
				content.SubCategories = append(content.SubCategories, subCategory)
			}
		}
	}

	likes, err := i.likeRepository.GetListByUser(param.UserId)
	if err != nil {
		log.Println(err)
		return contents, err
	}

likeLoop:
	for _, content := range contents {
		for _, like := range likes {
			if content.Id == like.ContentId {
				likedList = append(likedList, content)
				continue likeLoop
			}
		}
	}

	return likedList, nil
}

// // get list by id list
// rpc GetListByIdList (IdListRequest) returns (paramList) {}
func (i *ContentInteractorImpl) GetListByIdList(param *pb.ContentIdListRequest) ([]*pb.Content, error) {
	var (
		contents       []*pb.Content
		err            error
		paramIdListStr string
	)

	paramIdListStr = strings.Trim(strings.Join(strings.Fields(fmt.Sprint(param.Id)), ", "), "[]")

	contents, err = i.contentRepository.GetListByIdList(paramIdListStr)
	if err != nil {
		log.Println(err)
		return contents, err
	}

	return contents, nil
}

// admin
// get all
func (i *ContentInteractorImpl) GetAll() ([]*pb.Content, error) {
	var (
		contents []*pb.Content
		err      error
	)

	contents, err = i.contentRepository.GetAll()
	if err != nil {
		log.Println(err)
		return contents, err
	}

	return contents, nil
}
