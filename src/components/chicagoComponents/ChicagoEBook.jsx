import React, { useState } from 'react';
import '../../css/subpage.css';
import Card from 'react-bootstrap/Card';
import Authors from '../formComponents/Authors';
import Pages from '../formComponents/Pages';
import Citation from '../formComponents/Citaton';
import StringComponent from '../formComponents/StringComponent';

const CMOS = require('chicagomanualofstyle');

function ChicagoBook() {
  const emptyValue = { value: '' };
  const [authors, setAuthors] = useState([]);
  const [pages, setPages] = useState([]);
  const [title, setTitle] = useState(emptyValue);
  const [publisher, setPublisher] = useState(emptyValue);
  const [placeOfPublication, setPlaceOfPublication] = useState(emptyValue);
  const [yearOfPublication, setYearOfPublication] = useState(emptyValue);
  const [URL, setURL] = useState(emptyValue);
  const [citation, setCitation] = useState({ bibliography: '', notes: [] });

  const generateCitation = () => {
    const book = CMOS.eBook({
      title: title.value || 'Must specify title',
      authorList: authors,
      publisher: publisher.value,
      placeOfPublication: placeOfPublication.value,
      yearOfPublication: yearOfPublication.value,
      url: URL.value || 'Must specify URL',
    }, pages);

    setCitation({ bibliography: book.bibliography, notes: book.notes });
  };

  return (
    <div className="container">
      <h1 className="subpage-heading">Chicago Style Electronic Book Citation</h1>
      <div className="data-entry">
        <Card>
          <div className="container form-start">
            <StringComponent formLabel="Title" str={title} setStr={setTitle} generateCitation={generateCitation} />
            <StringComponent formLabel="Publisher" str={publisher} setStr={setPublisher} generateCitation={generateCitation} />
            <StringComponent formLabel="Place of Publication" str={placeOfPublication} setStr={setPlaceOfPublication} generateCitation={generateCitation} />
            <StringComponent formLabel="Year of Publication" str={yearOfPublication} setStr={setYearOfPublication} generateCitation={generateCitation} />
            <StringComponent formLabel="URL/DOI" str={URL} setStr={setURL} generateCitation={generateCitation} />
            <Authors authors={authors} setAuthors={setAuthors} generateCitation={generateCitation} />
            <Pages pages={pages} setPages={setPages} />
            <Citation citation={citation} generateCitation={generateCitation} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ChicagoBook;
