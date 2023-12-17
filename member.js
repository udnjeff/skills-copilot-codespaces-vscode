function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    templateUrl: 'app/skills/member.html'
  };
}