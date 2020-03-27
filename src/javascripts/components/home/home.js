import utils from '../../helpers/utils';


const myNavBar = () => {
  let domString = '';
  domString += '<h2> PINTEREST</h2>';
  domString += '<img src = "">';
  utils.printToDom('home', domString);
};

export default { myNavBar };
