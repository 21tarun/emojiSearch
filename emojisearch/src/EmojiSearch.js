import React, { Component } from 'react';

const emojis = [
  { emoji: "😀", name: "Grinning Face" },
  { emoji: "😆", name: "Grinning Squinting Face" },
  { emoji: "😎", name: "Smiling Face with Sunglasses" },
  { emoji: "🤩", name: "Star-Struck" },
  { emoji: "😍", name: "Smiling Face with Heart-Eyes" },
  { emoji: "🤔", name: "Thinking Face" },
  { emoji: "😴", name: "Sleeping Face" },
  { emoji: "🥳", name: "Partying Face" },
  { emoji: "🤢", name: "Nauseated Face" },
  { emoji: "🥺", name: "Pleading Face" },
  {emoji:"💯",name:"100"}
];

class EmojiSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emojis: emojis,
      searchQuery: ""
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    const searchQuery = event.target.value.toLowerCase();
    const filteredEmojis = emojis.filter(emoji =>
      emoji.name.toLowerCase().includes(searchQuery)
    );
    this.setState({
      emojis: filteredEmojis,
      searchQuery: searchQuery
    });
  }

  renderEmojis() {
    return this.state.emojis.map(emoji => (
      <div key={emoji.name} className="emoji">
        {emoji.emoji} {emoji.name}
      </div>
    ));
  }

  render() {
    return (
      <div className="emoji-search">
        <input
          type="text"
          placeholder="Search for an emoji"
          value={this.state.searchQuery}
          onChange={this.handleSearch}
        />
        <div className="emoji-list">{this.renderEmojis()}</div>
      </div>
    );
  }
}

export default EmojiSearch;
