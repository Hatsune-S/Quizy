/**
 *学習データをローディング
 */
function loadLearningData(){
    let load_json = localStorage.getItem('learning_data');  //「ローカルストレージ」からデータをロード
    g_learning_data = JSON.parse(load_json);                //「JSON」から「学習データ列）」へ変換

    //データが無ければ、learning_dataはnullになる
    if( g_learning_data === null){
        g_learning_data = new Array();
    }
}

/**
 *「学習データ」をセーブ
 */
function saveLearningData(){
    let save_json = JSON.stringify(g_learning_data);    //「学習データ列」を「JSON」へ変換
    localStorage.setItem('learning_data', save_json);   //「ローカルストレージ」へセーブ
}

/**
 *「指定ID」を返却
 */
function getElmId(val){
    return document.getElementById(val);
}

/**
 *「指定クラス」を返却
 */
function getElmClass(val){
    return document.getElementsByClassName(val);
}
