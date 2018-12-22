var data = [{ "when": "2 minutes ago",
             "who": "Jill Dupre",
             "description": "Created new account"
           },
           {
             "when": "1 hour ago",
             "who": "Lose White",
             "description": "Added fist chapter"
}, {
             "when": "2 hours ago",
             "who": "Jordan Whash",
             "description": "Created new account"
}];
var headings = ["Last updated at", "By Author", "Summary"]
var title = "Recent Changes - Example_02";

var App = React.createClass({
     render: function(){
         var headings = this.props.headings.map(function(heading) {
           return(<th>
              {heading}
       </th>);
       });
         var rows = this.props.data.map(function(row,index){
         return
         <tr className="row" key={"row_"+index.toString()}>
            <td>{row.when}</td>
            <td>{row.who}</td>
            <td>{row.description}</td>
          </tr>
         })
        return <div><h1>{this.props.title}</h1>
        <table>
        <thead key="thead">
          <tr key="tr_head_01">
            {headings}
          </tr>
        </thead>
        <tbody key="tbody">
          {rows}
        </tbody>
        </table>
        </div>
        } });

      ReactDOM.render(<App headings={headings} data={data} title={title}/>,
       document.body);
