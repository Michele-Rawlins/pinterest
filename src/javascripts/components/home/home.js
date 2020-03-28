import utils from '../../helpers/utils';


const myNavBar = () => {
  let domString = '';
  domString += '<h1> PINTEREST</h1>';
  utils.printToDom('home', domString);
};

export default { myNavBar };
