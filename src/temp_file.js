// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import PropTypes from 'prop-types';
// // import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// const myNews = [
//   { id: 1, author: "Author 1", title: "Title 1", text: "Text 1" },
//   { id: 2, author: "Author 2", title: "Title 2", text: "Text 2" },
//   { id: 3, author: "Author 3", title: "Title 3", text: "Text 3" },
//   { id: 4, author: "Author 4", title: "Title 4", text: "Text 4" }
// ];
//
// class App extends React.Component {
//   state = {
//     news: myNews
//   };
//
//   handleAddNews = (data) => {
//     const nextNews = [data, ...this.state.news];
//     this.setState({ news: nextNews });
//   };
//
//   render() {
//     // localStorage.setItem("currentUser", "saygan");
//     const currentUser = localStorage.getItem("currentUser");
//     console.log(currentUser);
//     return (
//       <React.Fragment>
//         <AddNews onAddNews={ this.handleAddNews }/>
//         <h3>News</h3>
//         <News data={ this.state.news } />
//       </React.Fragment>
//     )
//   }
// }
//
// class AddNews extends React.Component {
//   state = {
//     name: "",
//     title: "",
//     text: "",
//     agree: false
//   };
//
//   validate = () => {
//     const { name, title, text, agree } = this.state;
//     return name.trim() && title.trim() && text.trim() && agree
//   };
//
//   onBtnClickHandler = (e) => {
//     e.preventDefault();
//     const { name, title, text } = this.state;
//     this.props.onAddNews({ id: +new Date(), author: name, title, text });
//   };
//
//   handleChange = (e) => {
//     const { id, value } = e.currentTarget;
//     this.setState({ [id]: value });
//   };
//
//   handleCheckboxChange = (e) => {
//     this.setState({ agree: e.currentTarget.checked });
//   };
//
//   render() {
//     const { name, title, text } = this.state;
//
//     return (
//       <form className="add-news">
//         <input
//           id={"name"}
//           type="text"
//           onChange={ this.handleChange }
//           className={"add-news__author"}
//           placeholder={"Enter name"}
//           value={ name }
//         />
//         <textarea
//           id={"title"}
//           onChange={ this.handleChange }
//           className={"add-news__title"}
//           placeholder={"Enter title"}
//           value={ title }
//         />
//         <textarea
//           id={"text"}
//           onChange={ this.handleChange }
//           className={"add-news__text"}
//           placeholder={"Enter text"}
//           value={ text }
//         />
//         <label className={"add-news__check-rule"}>
//           <input type="checkbox" onChange={ this.handleCheckboxChange }/>I accept the rules
//         </label>
//         <button
//           className={"add-news__btn"}
//           onClick={ this.onBtnClickHandler }
//           disabled={ !this.validate() }>
//           Add news
//         </button>
//       </form>
//     )
//   }
// }
//
// AddNews.propTypes = {
//   onAddNews: PropTypes.func.isRequired
// };
//
// class News extends React.Component {
//   renderNews = (news) => {
//     console.log("aaa", news);
//     let newsTemplate;
//
//     if (news.length) {
//       newsTemplate = news.map(function(item) {
//         return <Article key={item.id} data={item} />
//       });
//     }
//     else {
//       newsTemplate = <p>No news</p>
//     }
//
//     return newsTemplate
//   };
//
//   renderNewsCounter = (length) => {
//     return length ? <strong className={"news__count"}>News count: { length }</strong> : null
//   };
//
//
//   render() {
//     const { data } = this.props;
//     return (
//       <div className={"news"}>
//         { this.renderNews(data) }
//         { this.renderNewsCounter(data.length) }
//       </div>
//     )
//   }
// }
//
// News.propTypes = {
//   data: PropTypes.array.isRequired
// };
//
// class Article extends React.Component {
//   state = {
//     visible: false
//   };
//
//   handleReadMoreClick = (e) => {
//     e.preventDefault();
//     this.setState({ visible: true });
//   };
//
//   render() {
//     const { author, title, text } = this.props.data;
//     const { visible } = this.state;
//
//     return (
//       <div className={"article"}>
//         <p className={"news__author"}>{ author }:</p>
//         <p className={"news__title"}>{ title }</p>
//         {
//           !visible && <a onClick={this.handleReadMoreClick} href="#readmore" className='news__readmore'>Read More</a>
//         }
//         {
//           visible && <p className={"news__text"}>{ text }</p>
//         }
//       </div>
//     )
//   }
// }
//
// Article.propTypes = {
//   data: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     author: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired
//   })
// };
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
