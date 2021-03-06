import React, {Component, PropTypes} from "react";
import CommonSelect from "./commonSelect";
import Api from "./../api";


const ProjectStatus = (props) => {
  const data = [{
    name: '正常',
    id: '1'
  }, {
    name: '终止',
    id: '2'
  }];
  return <CommonSelect data={data} {...props} />;
};

const ReleaseIntervalUnit = (props) => {
  const data = [{
    name: 'Day',
    id: '1'
  }, {
    name: 'Week',
    id: '2'
  }, {
    name: 'Month',
    id: '3'
  }];
  return <CommonSelect data={data} {...props} />;
};

const StoryStatus = (props) => {
  const data = [{
    name: 'Defined',
    id: '1'
  }, {
    name: 'In-Progress',
    id: '2',
  }, {
    name: 'Completed',
    id: '3',
  }, {
    name: 'Tested',
    id: '4',
  }, {
    name: 'Accepted',
    id: '5',
  }];
  return <CommonSelect data={data} {...props} />;
};

const TaskStatus = (props) => {
  const data = [{
    name: 'Defined',
    id: '1'
  }, {
    name: 'In-Progress',
    id: '2',
  }, {
    name: 'Completed',
    id: '3',
  }];
  return <CommonSelect data={data} {...props} />;
};

const DefectStatus = (props) => {
  const data = [{
    name: 'Submitted',
    id: '1'
  }, {
    name: 'Open',
    id: '2',
  }, {
    name: 'Fixed',
    id: '3',
  }, {
    name: 'Closed',
    id: '4',
  }];
  return <CommonSelect data={data} {...props} />;
};

const DefectPriority = (props) => {
  const data = [{
    name: 'None',
    id: '1'
  }, {
    name: 'Resolve Immediately',
    id: '2',
  }, {
    name: 'High Attention',
    id: '3',
  }, {
    name: 'Normal',
    id: '4',
  }, {
    name: 'Low',
    id: '5',
  }];
  return <CommonSelect data={data} {...props} />;
};

class ReleaseSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  componentWillMount() {
    const projectId = this.props.projectId;
    if (projectId) {
      this.loadData(projectId);
    }
  }
  
  loadData(projectId) {
    Api.Release.get(projectId)
      .then((resp) => {
        if (resp && resp.success) {
          const data = [];
          if (resp.data) {
            resp.data.forEach((item) => {
              data.push({
                id: item.id,
                name: `Release ${item.number}`
              });
            });
          }
          this.state.data = data;
          this.setState(this.state);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.projectId && nextProps.projectId !== this.props.projectId) {
      this.loadData(nextProps.projectId);
    }
  }
  
  render() {
    return <CommonSelect data={this.state.data} {...this.props} />;
  }
}

ReleaseSelect.propTypes = {
  projectId: PropTypes.string
};


class TopicSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  componentWillMount() {
    const me = this;
    Api.Topic.getUserList().then((res) => {
      if (res && res.success) {
        me.state.data = res.data;
        me.setState({
          data: res.data.map((item) => {
            return {
              id: item.id,
              name: item.title
            };
          })
        });
      }
    });
  }
  
  render() {
    return <CommonSelect data={this.state.data} {...this.props} />;
  }
}

export {
  ProjectStatus,
  ReleaseIntervalUnit,
  StoryStatus,
  TaskStatus,
  DefectStatus,
  DefectPriority,
  ReleaseSelect,
  TopicSelect
};

