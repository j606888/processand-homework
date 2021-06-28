* 將整個 Array 跑過一次，並且建立一個新的 Array 來存放避免修改到原 Array
* 使用 JSON.stringify 自行驗證答案，否則會變成 `[ [ [ 'f' ] ], 'm', [ 22, [ [Array], [Array], 'd', [Array] ] ] ]`
* 對於 typescript 還沒有太熟悉。在 ts 檔中會出現`Cannot redeclare block-scoped variable 'sampleArray'` 的警告訊息，但是不影響輸出後的 js。