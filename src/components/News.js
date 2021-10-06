import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  // articles = [];
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // constructor(props) {
  //   super(props);
    // console.log("Hello I'm a constructor from News component");
    // this.state = {
      // articles: [],
      // loading: true,
      // page: 1,
      // totalResults: 0,
    // };
    
  // }

 const updateNews = async() =>{
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ae2757a29e7a4ec398b880d1c435a05e&page=1&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  }
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=ae2757a29e7a4ec398b880d1c435a05e&page=1&pageSize=${props.pageSize}`;
  // console.log("cdm");
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ae2757a29e7a4ec398b880d1c435a05e&page=1&pageSize=${props.pageSize}`;
  // this.setState({ loading: false });
  // let data = await fetch(url);
  // let parseData = await data.json();
  // console.log(parseData);
  // this.setState({
  //   articles: parseData.articles,
  //   totalResults: parseData.totalResults,
  // });
  useEffect(() => {
      document.title = `GetNews - ${capitalizeFirstLetter(props.category)}`;
        updateNews();
        // this.updateNews();
  }, [])
  // async componentDidMount() {
  //   this.updateNews();
  // }

  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ae2757a29e7a4ec398b880d1c435a05e&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    // this.setState({
    //   articles: this.state.articles.concat(parseData.articles),
    //   totalResults: parseData.totalResults,
    // });
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    // setLoading(true);
  };

  // //let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=ae2757a29e7a4ec398b880d1c435a05e&page=${
  // //this.setState({page: this.state.page - 1});
  // //this.updateNews();

  const handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ae2757a29e7a4ec398b880d1c435a05e&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseData.articles,
    //   loading: false,
    // });
    setArticles(parseData.articles);
    setLoading(false);
    setPage(page-1)
  };
  //// } else {
 // // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=ae2757a29e7a4ec398b880d1c435a05e&page=${
 // // this.setState({ page: this.state.page + 1 });
 // // this.updateNews();

      const  handleNextClick = async () => {
          if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ae2757a29e7a4ec398b880d1c435a05e&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      // this.setState({
      //   page: this.state.page + 1,
      //   articles: parseData.articles,
      //   loading: false,
      // });
      setArticles(parseData.articles);
      setLoading(false);
      setPage(page+1);
    }

  };

  // render() {
    // console.log("render");
    return (
      <div className="container m-auto mt-5">
        <h3 className="text-center mb-20 pt-3" >
          GetNews - Top Headlines on {capitalizeFirstLetter(props.category)}
        </h3>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="news-items row container">
            {
              // !this.state.loading &&
              articles.map((element) => {
                return (
                  <div className="col-lg-auto col-md-auto col-sm-12 mt-5" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imgUrl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                      // publishedAt={element.publishedAt? element.publishedAt.slice(0, 10) : ""}
                    ></NewsItem>
                  </div>
                );
              })
            }
          </div>
        </InfiniteScroll>
        {/* {setLoading(false)} */}
        {/* <div className="container d-flex justify-content-between align-items-center m-2">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            &rarr; Next
          </button>
        </div> */}
      </div>
    );
  }
// }

export default News
// static defaultProps = {
News.defaultProps = {
    country: "in",
    pageSie: 8,
    cateory: "general",
  };
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };