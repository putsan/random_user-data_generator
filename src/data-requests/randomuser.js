import axios from "axios";

const mainAPILink = "https://randomuser.me/api/";

export const getUser = async (setData) => {
  console.log('clicked');
  let response;

  try {
    response = await axios({
      method: "GET",
      url: mainAPILink,
      dataType: "json",
    });
  } catch (error) {
    console.log('error: ', error);
  }


  console.log(16, response);
  const userData = response.data.results[0];
  setData({
    picture: userData.picture.medium,
    fullName: `${userData.name.first} ${userData.name.last}`,
    nickname: userData.login.username,
    email: userData.email,
  })
};
