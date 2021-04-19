function App (){
   

    const [quote, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState([]);
  

React.useEffect ( () => {
    async function fetchData() {
        const response = await fetch ("https://type.fit/api/quotes")
        const data = await response.json();

        setQuotes(data);
        let randIndex = Math.floor(Math.random() * data.length);
        setRandomQuote(data[randIndex])
    }
    fetchData();
}, [])

const getNewQuote = () => {

    let randIndex = Math.floor(Math.random() * quote.length);
    setRandomQuote(quote[randIndex])

}



    return (
        <div className="container pt-2" id="quote-box" >
            <div className="jumbotron">
            
            <div className="quoteBox">
             {randomQuote ? (
                 <>
                 <h5 className="authorBox" id="author"> {randomQuote.author || "unknow Author"} </h5>
                 <p id="text" > &quot;{randomQuote.text || "Nothing to show"}&quot; </p>
                 </>
             ) : (

                <h2>Loading</h2>
             
            
     ) }   

                <div className="rid">
                    <button onClick={getNewQuote} className="btn btn-primary" id="new-quote">Next quote</button>
                    
                    <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text= "+
                     encodeURIComponent('"' + randomQuote.text + '" ' + randomQuote.author)} target="_blank" className="btn btn-info" id="tweet-quote">
                    <i className="fa fa-twitter"></i>
                    </a>
                    <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
                      encodeURIComponent(randomQuote.author) +
                      '&content=' +
                      encodeURIComponent(randomQuote.text) +
                     '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'} target="_blank" className="btn btn-info">
                    <i class="fa fa-tumblr"></i>
                    </a> 
                   </div> 
        

            </div>
         
            </div> 

            </div>
    )
}



ReactDOM.render(<App/>, document.getElementById('app'))
