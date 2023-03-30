//перше завдання
function getData(url) {
  let result = fetch(url);
  result
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Error: ${response.status}`);
    })
    .then(function (data) {
      return filterData(data);
    })
    .then(function (filterData) {
      console.log("Filtered data:", filterData);
    })
    .catch(function (error) {
      console.log(error.message);
    });
}
function filterData(data) {
  return data.filter(function(obj) {
    return obj.title.startsWith("a");
  });
}
getData("https://jsonplaceholder.typicode.com/todos/");

//друге завдання
async function getData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
       throw new Error(`Error: ${response.status}`);
    }
    let data = await response.json();
    let filteredData = filterData(data);
    console.log("Filtered data:", filteredData);
  } catch (error) {
    console.log(error.message);
  }
}
function filterData(data) {
  return data.filter(function (obj) {
    return obj.title.startsWith("a");
  });
}
getData("https://jsonplaceholder.typicode.com/todos/");

