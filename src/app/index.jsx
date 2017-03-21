console.log('Hello World!');
import SRPCard from './SRPCard.jsx';


var SRPPage = React.createClass({
    render: function(){
        return (
            <div>
		Hello React Aditya !!!
		<SRPCard />
            </div>
        );
    }
});


ReactDOM.render(<SRPPage />, document.getElementById('root'));