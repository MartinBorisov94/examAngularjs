app.factory('userProfileService',
    function ($http, baseServiceUrl, authService) {
        return {
            changeUserPassword: function (passwordData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/changepassword',
                    headers: authService.getAuthHeaders(),
                    data: passwordData
                };
                $http(request).success(success).error(error);
            },
            editUserProfile: function (userDate, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/profile',
                    headers: authService.getAuthHeaders(),
                    data: userDate
                };
                $http(request).success(success).error(error);
            },
            getUserProfile: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/profile',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);
