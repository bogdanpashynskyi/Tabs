import React, {Component} from 'react';

class Tabs extends Component {
	state = {
		currentTab: "",
	};
	
  render() {
		const {children} = this.props;
		const {currentTab} = this.state;
		
    return (
			<>
			<div className="Tabs">
				{children.map(child => { 
					return <h3 
						key={child.props.title}
						className="Tab__titles"
						onClick={() => {
							this.setState({ currentTab: child.props.children })
						}}> 
						{child.props.title} 
					</h3>
				})}
				</div>
				<div>
					<div className="Tabs__content">{currentTab}</div>
				</div>
			</>
				
			
      )
  }
}

const Tab = () => {}

export {Tabs, Tab};