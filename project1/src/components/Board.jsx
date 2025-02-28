import React from "react";
import Card from "./Card";

const Board = () => {
  return (
    <div className='board'>
      <div className="quarter">
        <h2>Fall Quarter</h2>
        <h3>09/21 - 12/13</h3>
        <div className='card-container'>
          <Card 
            title="Veterans Day" 
            date="11/11" 
            pic="/images/veteransday.jpg" 
            desc="A national holiday recognizing and honoring military veterans who have served in the U.S. Armed Forces."
            link="https://en.wikipedia.org/wiki/Veterans_Day"
          />
          <Card 
            title="Thanksgiving" 
            date="11/28-11/29" 
            pic="/images/thanksgiving.jpg" 
            desc="A holiday celebrating gratitude, often marked by family gatherings and a traditional feast."
            link="https://en.wikipedia.org/wiki/Thanksgiving"
          />
          <Card 
            title="Winter Holidays" 
            date="12/24-01/01" 
            pic="/images/winterholidays.jpg" 
            desc="A festive season that includes Christmas, Hanukkah, Kwanzaa, and New Year's celebrations."
            link="https://en.wikipedia.org/wiki/Winter_Holiday"
          />
        </div>
      </div>
      
      <div className="quarter">
        <h2>Winter Quarter</h2>
        <h3>01/03-03/21</h3>
        <div className='card-container'>
          <Card 
            title="Martin Luther King Jr. Day" 
            date="01/20" 
            pic="/images/mlkday.jpg" 
            desc="A day honoring Dr. Martin Luther King Jr.'s legacy and his contributions to the civil rights movement."
            link="https://en.wikipedia.org/wiki/Martin_Luther_King_Jr._Day"
          />
          <Card 
            title="Presidents' Day" 
            date="02/17" 
            pic="/images/presidentsday.jpg" 
            desc="A holiday celebrating the birthdays and leadership of U.S. presidents, especially Washington and Lincoln."
            link="https://en.wikipedia.org/wiki/Washington%27s_Birthday"
          />
        </div>
      </div>
      
      <div className="quarter">
        <h2>Spring/Summer Quarter</h2>
        <h3>03/31-06/12, 06/23-08/29</h3>
        <div className='card-container'>
          <Card 
            title="Memorial Day" 
            date="05/26" 
            pic="/images/memorialday.jpg" 
            desc="A day to remember and honor those who died while serving in the U.S. military."
            link="https://en.wikipedia.org/wiki/Memorial_Day"
          />
          <Card 
            title="Independence Day" 
            date="07/04" 
            pic="/images/independenceday.jpg" 
            desc="A national holiday commemorating the adoption of the Declaration of Independence in 1776."
            link="https://en.wikipedia.org/wiki/Independence_Day_(United_States)"
          />
        </div>
      </div>
      
      <div className="quarter">
        <h2>Holidays That Don't Occur During Any Quarter</h2>
        <div className='card-container'>
          <Card 
            title="Labor Day" 
            date="09/02" 
            pic="/images/laborday.jpg" 
            desc="A day dedicated to honoring the contributions of American workers and the labor movement."
            link="https://en.wikipedia.org/wiki/Labor_Day"
          />
          <Card 
            title="Cesar Chavez Day" 
            date="03/28" 
            pic="/images/cesarchavezday.jpg" 
            desc="A day recognizing the legacy of labor leader and civil rights activist Cesar Chavez."
            link="https://en.wikipedia.org/wiki/Cesar_Chavez_Day"
          />
          <Card 
            title="Juneteenth" 
            date="06/19" 
            pic="/images/juneteenth.jpg" 
            desc="A celebration marking the end of slavery in the U.S., commemorating the emancipation of enslaved people in Texas."
            link="https://en.wikipedia.org/wiki/Juneteenth"
          />
        </div>
      </div>
    </div>
  );
}

export default Board;