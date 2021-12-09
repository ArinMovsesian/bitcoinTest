
import { graphActions } from "./graph-slice";
const fetchGraphData = () => {
  // Action Creator Func
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://index-api.bitcoin.com/api/v0/history"
      );

      if (!response.ok) {
        throw new Error("could not fetch cart data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await fetchData();
    
      let temp = [];
      for (let i = 0; i < data.length; i++) {
        let obj = {};
        for (let j = 0; j < data[i].length; j++) {
          if (j == 0) {
            obj.time = data[i][j];
          } else {
            obj.price= data[i][j];
          }
        }
        temp.push(obj);
      }
      console.log(temp);
      dispatch(graphActions.setAllData({data: temp}))
      dispatch(graphActions.setData({data: temp}))
    } catch (error) {
    
    }
  };
};
export default fetchGraphData;