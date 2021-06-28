function count_e(word){
    let count=0;
    for(let i=0;i<word.length;i++){
        if(word.charAt(i)=="e"){
            count++;
        }
    }
    console.log(count);
}
count_e("kamogelomashikee");
