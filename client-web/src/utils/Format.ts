export const dateFormat = (date: string | undefined): string => {
  if (!date) return "";
  const resDate = new Date(date);
  const dateY = resDate.getFullYear();
  const dateM = resDate.getMonth() + 1;
  const dateD = resDate.getDate();

  return dateY + "年" + dateM + "月" + dateD + "日";
};

export const monthFormat = (month: string): string => {
  const resDate = new Date(month);
  // 登録日のフォーマット変更
  const dateY = resDate.getFullYear();
  const dateM = resDate.getMonth() + 1;

  return dateY + "年" + dateM + "月";
};

export const timeFormat = (date: string | undefined): string => {
  if (!date) return "";

  const resDate = new Date(date);
  const year = resDate.getFullYear();
  const month = resDate.getMonth() + 1;
  const day = resDate.getDate();
  const h = resDate.getHours();
  const m = resDate.getMinutes();

  let hours = h.toString();
  let minutes = m.toString();

  if (h <= 10) {
    hours = "0" + h;
  }
  if (m <= 10) {
    minutes = "0" + m;
  }

  const dateString = `${year}/${month}/${day} ${hours}:${minutes}`;
  return dateString;
};

export const getAge = (date: string): number => {
  //今日
  const today = new Date();

  //今日
  const birthday = new Date(date);

  //今年の誕生日
  const thisYearsBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

  //年齢
  let age = today.getFullYear() - birthday.getFullYear();

  if (today < thisYearsBirthday) {
    //今年まだ誕生日が来ていない
    age--;
  }

  return age;
};

// デフォルトの生年月日が25歳になるように
export const dateDefault = (): string => {
  // 今日
  const today = new Date();

  // 25歳の人は何年に産まれている？
  const ageY = today.getFullYear() - 25;

  const m = today.getMonth() + 1;
  let ageM = m.toString();

  if (m <= 10) {
    ageM = "0" + m;
  }

  // 25歳の日付
  const birthdayAge25 = `${ageY}-${ageM}-${today.getDate()}`;

  return birthdayAge25;
};
