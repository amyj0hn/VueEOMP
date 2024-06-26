// Fetch data from index.json file
fetch('index.json')
    .then( response => {
        if(!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json();
    })
//     .then(data => {
//         displayJobTitle(data.JobTitle);
//         displayAbout(data.AboutMe);
//         displayEducation(data.Education);
//         displayExperience(data.Experience);
//         displaySkills(data.Skills);
//         displayTestimonials(data.Testimonials);
//         displayProjects(data.ProjectRecords)
// })
// .catch(error => console.error('Fetching data', error));                                                                        