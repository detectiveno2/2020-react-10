import React, { Component } from "react";
import "./../css/Table.css";
import classnames from "classnames";

class Table extends Component {
  render() {
    return (
      <div className="Table">
        <table>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
          {this.props.users.map((user, index, users) => {
            let className = classnames({
              "is-even": (index + 1) % 2 === 0,
            });
            return (
              <tr key={index + 1} className={className}>
                <td>{index + 1}</td>
                <td>{user.first}</td>
                <td>{user.last}</td>
                <td>{user.handle}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Table;
