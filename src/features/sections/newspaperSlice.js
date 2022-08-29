import { createSlice } from "@reduxjs/toolkit";
import { news } from "../../Data";

const initialState = {
  data: news,
  displayNews: [
    {
      id: "00",
      number: "01",
      headline: {
        bigHeadLine: "BREAKING NEWS JESUS COLLAB SATAN",
        intro:
          "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. LIBERO DICTA NOBIS VITAE ACCUSAMUS VERO EAQUE QUAS, CORRUPTI QUIS EA REPUDIANDAE MINUS SAPIENTE DOLORUM MAGNAM PORRO MOLESTIAE VOLUPTATUM LABORE ET ISTE PROVIDENT POSSIMUS QUIBUSDAM QUISQUAM REPELLAT EIUS.",
        client: "Youtube,Google",
        role: "Content Writer, Digital Marketing, Photography",
        date: "June 2022",
      },
      part0: {
        headLine0: "THE BEGINNING OF NEW ERA",
        post0: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe qui itaque praesentium nisi assumenda molestiae? Illo, perspiciatis voluptate numquam enim, quis soluta a, dicta facere cumque nobis repellendus eaque. Corporis repudiandae pariatur quos cupiditate atque harum recusandae consectetur expedita molestias saepe omnis numquam nostrum aliquid fuga tenetur quis vel autem exercitationem consequuntur, est veniam. Ab repellat ea quam assumenda?",
        ],
      },
      part1: {
        headLine1: "SATAN IS GAY",
        post1: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe qui itaque praesentium nisi assumenda molestiae? Illo, perspiciatis voluptate numquam enim, quis soluta a, dicta facere cumque nobis repellendus eaque. ",
          "Corporis repudiandae pariatur quos cupiditate atque harum recusandae consectetur expedita molestias saepe omnis numquam nostrum aliquid fuga tenetur quis vel autem exercitationem consequuntur, est veniam. Ab repellat ea quam assumenda?",
        ],
      },
      writerName: "TRIEU QUAN SU",
    },
  ],
};

const newspaperSlice = createSlice({
  name: "newspaper",
  initialState,
  reducers: {
    chooseNews: (state,{payload}) => {
     const choose = state.data.filter((news)=>{
      return news.number === payload
     })
     state.displayNews = choose
     console.log(state.displayNews)
    },
  },
});

export const {chooseNews} = newspaperSlice.actions
export default newspaperSlice.reducer;
