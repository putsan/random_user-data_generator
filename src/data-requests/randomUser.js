import axios from "axios";

const MAIN_RANDOM_US_LINK = "https://randomuser.me/api";
const NAME_FAKE_EN = "https://api.namefake.com/english-united-states"

export const getFullData = async (setData) => {
  let response;

  try {
    response = await axios({
      method: "GET",
      url: MAIN_RANDOM_US_LINK,
      dataType: "json",
      params: {
        inc: 'name, email, login, picture',
      }
    });
  } catch (error) {
    console.log('Caught error: ', error);
  }

  getNameFake();
  const userData = response.data.results[0];
  setData({
    picture: userData.picture.large,
    fullName: `${userData.name.first} ${userData.name.last}`,
    nickname: userData.login.username,
    email: userData.email,
  })
};

export const getNameFake = async() => {
  let response;

  try {
    response = await axios({
      method: "GET",
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "*",
      url: `${NAME_FAKE_EN}/random`,
      params: {
        // inc: 'name, email, login, picture',
      }
    });
  } catch (error) {
    console.log('Caught error: ', error);
  }
  console.log(46, response?.data);
}
