const getQuery = () => {
  let queryParam = window.location.search;
  queryParam = queryParam.replace("?", "");
  queryParam = queryParam.split("&");

  let queryObject = {};
  queryParam.forEach((queryParam) => {
    const splits = queryParam.split("=");
    queryObject[splits[0]] = splits[1];
  });
  return queryObject;
};

const queryName = getQuery().name;
const queryEmail = getQuery().email;

console.log(queryName, queryEmail);
