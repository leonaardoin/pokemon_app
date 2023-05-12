// const React = require('react');
    
// const myStyle = {
//     color: 'red',
//     backgroundColor: 'orange',
//     };

//     class Index extends React.Component {
//         render() {
//           const { pokemon } = this.props
//           return (
//           <div style={myStyle}>
//               <h1>See All The Pokemon!</h1>
//               <ul>
//                 {pokemon.map((pokemon, i) => {
//                   return (
//                     <li>
//                       <a href={`/pokemon/${i}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>
//                     </li>
//                   );
//                 })}
//               </ul>
//               <nav>
//                   <a href="http://localhost:3000">Back</a>
//               </nav>
//           </div>
//           )
//         }
//       }
      
//       module.exports = Index

const React = require('react');
    
const myStyle = {
    color: 'red',
    backgroundColor: 'orange',
    };

class Index extends React.Component {
    render() {
        return (
            <div style={myStyle}>
                <h1>See All The Pokemon!</h1>
                <ul>
                    {this.props.pokemon.map((pokemon, x) => {
                        return(
                            <a href={`/pokemon/${pokemon.id}`}>
                                <li>
                                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}                                
                                </li>
                            </a>
                        )
                    })}
                </ul>
                <nav>
                    <a href="/pokemon/new">Create a New Pokemon!</a>
                </nav>
                <a href="/"> Back </a>
            </div>
        );
    }
}

module.exports = Index;