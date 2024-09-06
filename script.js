// Assuming you have a text file 'data.txt' with the content "apple,banana,orange,grape"
fetch('data.json')
  .then(response => response.text())
  .then(data => {
    const dataArray = data.split(';');
    const table = document.getElementById('data-table-body');

    dataArray.forEach(item => {
      const row = table.insertRow(-1);
      const one = item.split(',')
        one.forEach(item =>{
            if(item) {
                let cell;
                if(item.startsWith('图标：')){
                    cell = row.insertCell(1);
                    let img = document.createElement('img');
                    cell.appendChild(img);
                    img.src = item.split('：')[1];
                    img.width = 30;
                    img.height = 30;
                }
                else if(item.startsWith('直链：'))
                {
                    cell = row.insertCell(-1);
                    let btn = document.createElement('a');
                    cell.appendChild(btn);
                    let data = item.split('：')[1];
                    if(data == '暂无')
                    {
                        btn.textContent = '暂无';
                        btn.className = 'btn btn-sm btn-default';
                        btn.setAttribute('href', '#');
                    }
                    else
                    {
                        btn.textContent = '直链下载';
                        btn.className = 'btn btn-sm btn-success';
                        btn.setAttribute('href', data);
                    }
                }
                else if(item.startsWith('官网：'))
                {
                    cell = row.insertCell(-1);
                    let btn = document.createElement('a');
                    cell.appendChild(btn);
                    let data = item.split('：')[1];
                    if(data == '暂无')
                    {
                        btn.textContent = '暂无';
                        btn.className = 'btn btn-sm btn-default';
                        btn.setAttribute('href', '#');
                    }
                    else
                    {
                        btn.textContent = '官网';
                        btn.className = 'btn btn-sm btn-info';
                        btn.setAttribute('href', data);
                    }
                }
                else if(item.startsWith('历史版本：'))
                {
                    cell = row.insertCell(-1);
                    let btn = document.createElement('a');
                    cell.appendChild(btn);
                    let data = item.split('：')[1];
                    if(data == '暂无')
                    {
                        btn.textContent = '暂无';
                        btn.className = 'btn btn-sm btn-default';
                        btn.setAttribute('href', '#');
                    }
                    else
                    {
                        btn.textContent = '历史版本';
                        btn.className = 'btn btn-sm btn-primary';
                        btn.setAttribute('href', data);
                    }
                }
                else
                {
                    cell = row.insertCell(-1);
                    cell.textContent = item;
                }
                cell.style = 'vertical-align: middle;';
            }
        })
    });
  });