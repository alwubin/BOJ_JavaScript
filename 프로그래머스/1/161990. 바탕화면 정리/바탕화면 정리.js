function solution(wallpaper) {
    var answer = [];
    let minRow=Infinity,minColumn=Infinity,maxRow=-Infinity,maxColumn=-Infinity
    const twoDemWallpaper = wallpaper.map(rows=>rows.split(''))

    twoDemWallpaper.forEach((rows,rowIdx)=>{
        rows.forEach((file,columnIdx)=>{
            if(file==='#'){
                minRow = Math.min(minRow,rowIdx)
                minColumn = Math.min(minColumn,columnIdx)
                maxRow = Math.max(maxRow,rowIdx)
                maxColumn = Math.max(maxColumn,columnIdx)
            }
        })
    })

    return [minRow,minColumn,maxRow+1,maxColumn+1]
}