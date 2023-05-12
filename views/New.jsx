const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Pokemon page</h1>
            <form action="/pokemon" method="POST">
                Name: <input type="text" name="name" /><br/>
                IMG: <input type="url" name="img" /><br/>
                <input type="submit" name="" value="Create A New Pokemon!"/>
             </form>
             <a href="/pokemon"> Back </a>
        </div>);
  }
}

module.exports = New;