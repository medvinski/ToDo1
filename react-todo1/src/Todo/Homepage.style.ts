import { mergeStyleSets } from "@fluentui/react";
import { IProcessedStyleSet, IStyle } from "@fluentui/react/lib/Styling";
import notebookPaperImage from './notebook-paper.jpg';
import headerImage from './lavender.jpg';

interface IHomepageStyle {
  todoContainer: IStyle;
  headerStyle: IStyle;
  tabContainer: IStyle;
  tab: IStyle;
  activeTab: IStyle;
  clockStyle: IStyle;
  adviceContainer: IStyle; // New style for the advice container
  adviceStyle: IStyle
  jokeContainer: IStyle; // New style for the advice container
  jokeStyle: IStyle
  
}

export const HomepageStyle: IProcessedStyleSet<IHomepageStyle> = mergeStyleSets({
  todoContainer: {
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
    width: '560px',
    height: '700px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  headerStyle: {
    // Styles for the header
    height: 50,
    backgroundImage: `url(${headerImage})`,
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    WebkitTextStroke: '2px black',
    WebkitTextFillColor: 'white',
    fontSize: '24px',
  },
  tabContainer: {
    // Styles for the tab container
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  tab: {
    // Styles for each tab
    padding: '5px 20px',
    cursor: 'pointer',
    backgroundColor: 'cream',
    margin: '0 5px',
    borderRadius: '5px',
    userSelect: 'none', 
    fontWeight: "bold",
    fontSize: '20px',
    
      
  },
  activeTab: {
    // Styles for the active tab
    backgroundColor: 'lightgrey',
    color: '',
  },
  clockStyle: {
    fontSize: "15px",
    fontWeight: "bold",
    marginTop: "10px",
    verticalAlign: "bottom",
    textAlign: "center",
  },
  adviceContainer: {
    
    textAlign: 'center', // Center the text
    fontSize: '24px',
  },
  adviceStyle: {
    fontSize: '26px',
    textAlign: 'center',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
    color: 'transparent',
    WebkitTextStroke: '1px navy',
    WebkitTextFillColor: 'lightpurple',
    WebkitTextStrokeWidth: '1px',
    fontWeight: "cursive",
    
  }, 
  jokeContainer: {
    
    textAlign: 'center', // Center the text
    fontSize: '24px',
  },
  jokeStyle: {
    fontSize: '26px',
    textAlign: 'center',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
    color: 'transparent',
    WebkitTextStroke: '1px navy',
    WebkitTextFillColor: 'lightgreen',
    WebkitTextStrokeWidth: '1px',
    fontWeight: "cursive",
    
  }
  

});

export default HomepageStyle;
