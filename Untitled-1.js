const whosOnline = (friends) => {
  for (let i = 0; i < friends.length; i++) {
    
    const friend = friends[i];
    let status = friend.status;

    if (status === 'online' && friend.lastActivity >10 ){
        return Away;
    }
    if (friend === 0);
    return [];
}
console.log (status);
}