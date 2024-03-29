import { Component } from 'react';
import type React from 'react';

import { Context } from '@contexts/Context';
import ToDoListComponent from '@modules/ToDoListOnClass/component';

class ToDoListOnClass extends Component {
  static contextType = Context;
  declare context: React.ContextType<typeof Context>;

  render() {
    return <ToDoListComponent tasks={this.context.state.listClass} />;
  }
}

export default ToDoListOnClass;
