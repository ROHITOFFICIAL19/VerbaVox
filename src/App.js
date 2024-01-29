import React, {useEffect,useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import useStyles from './styles.js';

import NewsCards from "./components/NewsCards/NewsCards";

const alanKey = '80d8e35cf79cacb421bffb043a82d3f62e956eca572e1d8b807a3e2338fdd0dc/stage';
const App =() => {
  const [newsArticles,setNewsArticles] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
         key: alanKey,
         onCommand: ({ command, articles }) => {
          if(command === 'newHeadlines')
          {
            setNewsArticles(articles);
          }
         }
    })
  }, [])
  return(
    <div>
      <h1>VerbaVox</h1>
      <div className={classes.logoContainer}>
          <img src="https://psqgroup.com.au/wp-content/uploads/2023/10/Untitled-design.jpg" className={classes.alanLogo}/>
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  )
}
export default App;

//1.19.41