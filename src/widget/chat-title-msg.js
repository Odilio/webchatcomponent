import { h, Component } from 'preact';

export default class ChatTitleMsg extends Component {

    render({isOpened, conf},{}) {
        return (
            <div style={{position: 'relative', cursor: 'pointer'}} onClick={this.props.onClick}>
              
                <div 
                    className="desktop-closed-message-avatar"
                    style={{
                        background: '#fff',
                        display: 'block',
                        position: 'absolute',
                        top: '10px',
                        right: '40px',
                        height: '60px',
                        width: '60px',
                        borderRadius: '999px',
                        boxShadow: '#8e8d8d -3px 2px 20px',
                        border: '2px solid '+conf.mainColor
                    }}
                >   
                     <img 
                            src='https://images.all-free-download.com/images/graphiclarge/harry_potter_icon_6825007.jpg'
                            alt="Avatar"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '999px'
                            }}
                        />
                        
                    </div>
                </div>
        );
    }
}
