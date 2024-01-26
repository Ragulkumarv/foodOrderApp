export default function filteredData(searchText, resData) {
  return resData.filter((x) =>
    x.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
