import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import './CountryCard.css';

function CountryCard({country}) {
  return (
    <Card className='card'  style={{ width: '18rem', height:'22rem'}}>
      <Card.Img  className='CardImage' variant="top" src={country.flags.png} />
      <Card.Body>
        <Card.Title>{country.name.common}</Card.Title>
        <Card.Text>
        {country.name.official}
        </Card.Text>
        <Card.Text>
          <ul>
            {country.languages && Object.values(country.languages).map((lang)=> <li>{lang}</li>)}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CountryCard;