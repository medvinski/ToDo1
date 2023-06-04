import {  mergeStyleSets } from "@fluentui/react";
import { IProcessedStyleSet, IStyle } from "@fluentui/react/lib/Styling";
import notebookPaperImage from './notebook-paper.jpg';
import headerImage from './stars.jpg';

interface IHomepageStyle{
  todoContainer : IStyle;
  headerStyle : IStyle
}
export const HomepageStyle: IProcessedStyleSet<IHomepageStyle> = mergeStyleSets({
  todoContainer : {
    
    backgroundImage: `url(${notebookPaperImage})`,
    backgroundRepeat: 'repeat',
    border: '2px solid blue',
    boxShadow: `
      rgb(255, 255, 255) 10px -10px 0px -3px,
      rgb(31, 193, 27) 10px -10px,
      rgb(255, 255, 255) 20px -20px 0px -3px,
      rgb(255, 217, 19) 20px -20px,
      rgb(255, 255, 255) 30px -30px 0px -3px,
      rgb(255, 156, 85) 30px -30px,
      rgb(255, 255, 255) 40px -40px 0px -3px,
      rgb(255, 85, 85) 40px -40px
    `,
    width: '500px',
    height: '600px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
    headerStyle: {
      height: 50,
      backgroundImage: `url(${headerImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      WebkitTextStroke: '2px black',
      WebkitTextFillColor: 'white', 
      fontSize: '24px',
      
    }

  
})

export default HomepageStyle;