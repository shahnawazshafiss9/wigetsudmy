import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [result, setResult] = useState([])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            setResult(data.query.search);
        }
        if (term && !result.length) {
            search();
        } else {
            const settimeid = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 1000);
            return () => {
                clearTimeout(settimeid);
            }
        }
    }, [term]);
    const renderedResults = result.map((item) => {
        return (
            <div className="item" key={item.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org/wiki/${item.title}`} className="ui button">
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {item.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: item.snippet }} />
                </div>
            </div>
        )
    });


    const searchName = (event) => {
        setTerm(event);
    }
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Name</label>
                    <input className="input" value={term} onChange={(e) => searchName(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search
