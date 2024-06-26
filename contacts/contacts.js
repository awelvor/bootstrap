/* contacts.js */

tab=[
    {prenom:"Jacques", nom:"BIGOU", dn:"23-05-1942", cp:"22300", com:"LANNION", dat:"2024-06-21"}, 
    {prenom:"Thérèse", nom:"BIGOU", dn:"",  mob:"06.58.81.87.51", cp:"22300", com:"LANNION",dat:"2024-06-23"} ,
    {prenom:"Marie-Claude", nom:"CAROFF", dn:"", fix:"02.96.37.91.95",mob:"0686088087",cp:"22300", com:"LANNION",  dat:"2024-06-23"} ,
    {prenom:"Anne-Catherine", nom:"COJAN", dn:"", fix:"02.96.46.18.18", cp:"22300", com:"LANNION", dat:"2024-06-23"} ,
    {prenom:"David", nom:"GUICHAOUA", dn:"",  mob:"06.88.14.42.11",cp:"29490", com:"GUIPAVAS", dat:"2024-06-23"} ,
    {prenom:"Marie-Laure", nom:"GUICHAOUA", dn:"",  mob:"06.22.27.29.56",cp:"29490", com:"GUIPAVAS",  dat:"2024-06-23"} ,
    {prenom:"Nani", nom:"LE SAUX", dn:"", fix:"02.96.37.12.06", mob:"06.85.15.29.49", cp:"22300", com:"LANNION",dat:"2024-06-23"} ,
    {prenom:"Philippe", nom:"REGENT", dn:"07-09-1947", cp:"22300", com:"LANNION",  dat:"2024-06-21"}, 
    {prenom:"Nicole", nom:"REGENT", dn:"14-11-1947", cp:"22300", com:"LANNION",  dat:"2024-06-20"} , 
    {prenom:"Pascal", nom:"REGENT",dn:"13-02-1976", fix:"01.75.25.32.19", mob:"06.37.46.99.47", cp:"78120",com:"RAMBOUILLET", dat:"2024-06-21"}, 
    {prenom:"Guillaume", nom:"REGENT", dn:"03-10-1977", fix:"02.54.45.19.36", mob:"07.71.01.96.32",cp:"41700", com:"CHEVERNY", dat:"2024-06-20"} , 
    {prenom:"Marie-Cécile", nom:"REGENT", dn:"",cp:"59700", com:"MARCQ-EN-BAROEUL",   dat:"2024-06-22"} , 
    {prenom:"Camille", nom:"REGENT", dn:"", cp:"59700", com:"MARCQ-EN-BAROEUL",  dat:"2024-06-22"} , 
    {prenom:"Léa", nom:"REGENT", dn:"", cp:"59700", com:"MARCQ-EN-BAROEUL",  dat:"2024-06-22"} , 
    {prenom:"Léon", nom:"REGENT", dn:"", fix:"09.94.23.87.88",  cp:"78120",com:"RAMBOUILLET", dat:"2024-06-23"} ,
    {prenom:"Juliette", nom:"REGENT", dn:"",cp:"59700", com:"MARCQ-EN-BAROEUL",   dat:"2024-06-22"} , 
    {prenom:"Soline", nom:"REGENT", dn:"", fix:"01.75.25.32.19", mob:"06.63.05.31.09", cp:"78120",com:"RAMBOUILLET", dat:"2024-06-22"} , 
    {prenom:"Maxence", nom:"REGENT", dn:"",  cp:"78120",com:"RAMBOUILLET",  dat:"2024-06-22"} , 
    {prenom:"Côme", nom:"REGENT", dn:"",  cp:"78120",com:"RAMBOUILLET",  dat:"2024-06-22"} , 
    {prenom:"Antonin", nom:"REGENT", dn:"",  cp:"78120",com:"RAMBOUILLET",  dat:"2024-06-22"} , 
    {prenom:"Faustine", nom:"REGENT", dn:"",  cp:"78120",com:"RAMBOUILLET",  dat:"2024-06-22"} , 
    {prenom:"Marie-Gabrielle", nom:"REGENT", dn:"", fix:"02.54.45.19.36", mob:"07.71.01.37.14",cp:"41700", com:"CHEVERNY", dat:"2024-06-22"} , 
    {prenom:"Etienne", nom:"REGENT", dn:"", cp:"41700", com:"CHEVERNY",  dat:"2024-06-22"} , 
    {prenom:"Baudouin", nom:"REGENT", dn:"", cp:"41700", com:"CHEVERNY",  dat:"2024-06-22"} , 
    {prenom:"Louis-Marie", nom:"REGENT", dn:"", cp:"41700", com:"CHEVERNY",  dat:"2024-06-22"} , 
    {prenom:"François-Guillaume", nom:"REGENT", dn:"", cp:"41700", com:"CHEVERNY",  dat:"2024-06-22"} , 
    {prenom:"Xavier", nom:"REGENT", dn:"", cp:"86100", com:"CHATELLERAULT",  dat:"2024-06-22"} , 
    {prenom:"Dominique", nom:"REGENT", dn:"", cp:"59290", com:"WASQUEHAL",  dat:"2024-06-22"} , 
    {prenom:"Paulette", nom:"SANQUER", dn:"", fix:"02.96.37.91.95",cp:"22300", com:"LANNION",  dat:"2024-06-23"} ,
    {prenom:"Edouard", nom:"THIEFFRY", dn:"",   dat:"2024-06-22"} , 
    {prenom:"Chantal", nom:"THIEFFRY", dn:"",   dat:"2024-06-22"} , 
    {prenom:"Claude", nom:"TIBERGHIEN", dn:"", fix:"03.20.51.76.52",  dat:"2024-06-22"} , 
    {prenom:"Tounette", nom:"TIBERGHIEN", dn:"", fix:"03.20.51.76.52", mob:"06.69.40.95.27", dat:"2024-06-22"} , 
    {prenom:"Jacques-Yves", nom:"VINCENT", dn:"", fix:"01.42.39.84.65", mob:"06.87.56.20.52",cp:"75019", com:"PARIS", dat:"2024-06-22"} , 
    {prenom:"Jalila", nom:"VINCENT", dn:"", fix:"01.42.39.84.65", mob:"06.70.72.91.04", cp:"75019", com:"PARIS", dat:"2024-06-22"} , 
    {prenom:"Patrick", nom:"VINCENT", dn:"", cp:"75015", com:"PARIS",   dat:"2024-06-22"} , 
    {prenom:"Marielle", nom:"VINCENT", dn:"", cp:"06330", com:"ROQUEFORT-LES-PINS",   dat:"2024-06-22"} , 
    {prenom:"Pascal", nom:"VINCENT", dn:"", fix:"03.20.84.97.46", mob:"06.22.62.10.70", cp:"59235", com:"BERSEE",dat:"2024-06-22"} , 
    {prenom:"Myriam", nom:"VINCENT", dn:"", fix:"03.20.84.97.46", mob:"06.73.45.88.11",cp:"59235", com:"BERSEE", dat:"2024-06-22"} , 
    
    
//{prenom:"", nom:"", dn:"",   dat:"2024-06-23"} ,
    
    ];
    
    /* end of file */
