const checkForKey = () => {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(['openai-key'], (result) => {
        resolve(result['openai-key']);
      });
    });
  };


  const encode = (input) => {
    return btoa(input);
  };

  const saveKey = () => {
    const input = document.getElementById('key_input');

  if (input) {
    const { value } = input;

    // 编码字符串
    const encodedValue = encode(value);

    // 保存到谷歌存储
    chrome.storage.local.set({ 'openai-key': encodedValue }, () => {
      document.getElementById('key_needed').style.display = 'none';
      document.getElementById('key_entered').style.display = 'block';
    });
  }
};

    const changeKey = () => {
    document.getElementById('key_needed').style.display = 'block';
    document.getElementById('key_entered').style.display = 'none';
  };
  
  document.getElementById('save_key_button').addEventListener('click', saveKey);
  document
    .getElementById('change_key_button')
    .addEventListener('click', changeKey);

checkForKey().then((response) => {
    if (response) {
        document.getElementById('key_needed').style.display = 'none';
        document.getElementById('key_entered').style.display = 'block';
    }
});