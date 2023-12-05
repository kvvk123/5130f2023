

                    // Event listener for signup form submission
                    document.getElementById('signupForm').addEventListener('submit', function(e) {
                        e.preventDefault();
                        const formData = new FormData(this);
                        fetch('/signup', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(Object.fromEntries(formData)),
                        })
                        .then(response => response.json())
                        .then(data => {
                            if (data.success) {
                                window.location.href = '/success.html'; // Redirect to success page
                            } else {
                                alert(data.message);
                            }
                        })
                        .catch(error => {
                            console.error('Error during signup:', error);
                            alert('Error during signup.');
                        });
                    });

                    // Event listener for signin form submission
                    // Event listener for signin form submission
                    document.getElementById('signinForm').addEventListener('submit', function(e) {
                        e.preventDefault();
                        const formData = new FormData(this);
                        fetch('/signin', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(Object.fromEntries(formData)),
                        })
                        .then(response => {
                            if (response.ok) {
                                window.location.href = '/success';
                            } else {
                                return response.json();
                            }
                        })
                        .then(data => {
                            if (data) {
                                alert(data.message);
                            }
                        })
                        .catch(error => {
                            console.error('Error during signin:', error);
                            alert('Error during signin.');
                        });
                    });

                        // Event listener for guest access form submission
                        document.getElementById('guestForm').addEventListener('submit', function(e) {
                            e.preventDefault();
                            const formData = new FormData(this);
                            fetch('/guest', {
                                method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(Object.fromEntries(formData)),
                        })
                        .then(response => response.json())
                        .then(data => {
                            if (data.success) {
                                alert('Guest access successful');
                                // Redirect or perform other actions on success
                            } else {
                                alert(data.message);
                            }
                        })
                        .catch(error => {
                            alert('Error occurred during guest access.');
                            console.error(error);
                        });
                    });
