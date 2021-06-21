import React, { Component } from 'react';
import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';
import './chat.css'

class ChatBox extends Component {
  componentDidMount() {
    addResponseMessage("Hi &#128515;");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div className="chatBox" id="chat">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          title="Chat With Us"
          senderPlaceHolder
          />
      </div>
    );
  }
}

export default ChatBox;
