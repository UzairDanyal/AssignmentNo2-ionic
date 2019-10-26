import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllMoviesService {
  movies = [
    { year: '2001', name: 'Kabhi Khushi Kabhie Gham' },
    { year: '2002', name: 'Devdas' },
    { year: '2003', name: 'Kal Ho Naa Ho' },
    { year: '2004', name: 'Veer-Zaara' },
    { year: '2005', name: 'Black' },
    { year: '2006', name: 'Dhoom 2' },
    { year: '2007', name: 'Om Shanti Om' },
    { year: '2008', name: 'Ghajini' },
    { year: '2009', name: '3 Idiots' },
    { year: '2010', name: 'My Name Is Khan' },
    { year: '2011', name: 'Bodyguard' },
    { year: '2012', name: 'Ek Tha Tiger' },
    { year: '2013', name: 'Dhoom 3' },
    { year: '2014', name: 'PK' },
    { year: '2015', name: 'Bajrangi Bhaijaan' },
    { year: '2016', name: 'Dangal' }

  ];

  constructor() { }
  returnMoviesList() {
    return this.movies;
  }
  deleteMovie(year) {
    this.movies = this.movies.filter(e => {
      return e.year !== year;
    });
  }

  addNewMovie(year,name){
    this.movies.push({year,name});
    console.log('movie has been added');
  }
}

