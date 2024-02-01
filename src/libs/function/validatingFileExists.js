export const ValidatingDataExists = (datas, search) => {
  try {
    const data = datas.filter((el) => {
      if (el.id == search.id) {
        return el;
      }
    });
    if (data.length != 0) {
      return data;
    } else {
      return [];
    }
  } catch (error) {
    return error.message;
  }
};
