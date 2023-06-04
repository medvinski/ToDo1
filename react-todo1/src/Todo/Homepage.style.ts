import { mergeStyleSets } from "@fluentui/react";
import { IProcessedStyleSet, IStyle } from "@fluentui/react/lib/Styling";
import notebookPaperImage from './notebook-paper.jpg';
import headerImage from './stars.jpg';

interface IHomepageStyle {
  todoContainer: IStyle;
  headerStyle: IStyle;
  tabContainer: IStyle;
  tab: IStyle;
  activeTab: IStyle;
}

export const HomepageStyle: IProcessedStyleSet<IHomepageStyle> = mergeStyleSets({
  todoContainer: {
    // Background styles for the container
    backgroundColor: "white",
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
    // Styles for the header
    height: 50,
    backgroundColor: "grey",
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
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: 'cream',
    margin: '0 5px',
    borderRadius: '5px',
    userSelect: 'none',
 
    
  },
  activeTab: {
    // Styles for the active tab
    backgroundColor: 'yellow',
    color: '',
  },
});

export default HomepageStyle;
