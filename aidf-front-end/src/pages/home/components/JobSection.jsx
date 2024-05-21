import JobCard from "@/components/shared/JobCard";

function JobSection() {

    const jobs = [
        {
            _id : "xyz",
            title : "intern - Software Engineer",
            type : "Full-time",
            location: "Remote",
        },

        {
            _id : "abc",
            title: "software Engineer",
            type : "Full-time",
            location : "Colombo, Sri Lanka",
        },
    ];

    return(
        <section className="py-8">
            <h2>Available Jobs</h2>
            <div className="mt-4 flex flex-col gap-y-8">
               {
                jobs.map((job) => {
                    return (<JobCard
                        title ={job.title} 
                        _id = {job.id} 
                        type = {job.type} 
                        location = {job.location}/>)

                })
               }
               

                
            </div>
        </section>
    )

}

export default JobSection ;