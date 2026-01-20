document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const mainContent = document.querySelector('main');
    const confirmationState = document.getElementById('confirmationState');
    const summaryList = document.getElementById('summaryList');
    const startNewSurveyButton = document.getElementById('startNewSurvey');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
       
        if (validateForm()) {
           
            displayConfirmationState();
        }
    });

    startNewSurveyButton.addEventListener('click', () => {
      
        confirmationState.classList.add('hidden');
        summaryList.innerHTML = '';
        
     
        mainContent.classList.remove('hidden');
        form.reset();
        
       
        document.getElementById('courseName').focus();
    });

   
    function validateForm() {
       
        document.querySelectorAll('.error-message').forEach(e => e.remove());
        document.querySelectorAll('.error-field').forEach(e => e.classList.remove('error-field'));

        let isValid = true;
        let firstErrorElement = null;

       
        const requiredInputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                showError(input, `${input.labels[0].textContent.replace(':', '')} is required.`);
                if (!firstErrorElement) {
                    firstErrorElement = input;
                }
                isValid = false;
            }
        });

        
        const radioGroupName = 'assignmentsHelpful';
        const radioGroup = form.elements[radioGroupName];
        let radioSelected = false;
        for (const radio of radioGroup) {
            if (radio.checked) {
                radioSelected = true;
                break;
            }
        }
        if (!radioSelected) {
           
            const radioGroupContainer = form.querySelector(`.radio-group`).closest('div');
            showError(radioGroupContainer, 'Please indicate if assignments were helpful.');
            if (!firstErrorElement) {
               
                firstErrorElement = radioGroup[0]; 
            }
            isValid = false;
        }

        
        if (firstErrorElement) {
            firstErrorElement.focus();
        }

        return isValid;
    }

    
    function showError(element, message) {
        
        if (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
            element.classList.add('error-field');
        }

       
        const errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;

        element.parentNode.insertBefore(errorMessage, element.nextSibling);
    }

   
    function displayConfirmationState() {
        const formData = new FormData(form);
        
   
        mainContent.classList.add('hidden');
        
  
        summaryList.innerHTML = '';
        confirmationState.classList.remove('hidden');

       
        const courseName = formData.get('courseName');
        createSummaryItem('Course/ID', courseName);

    
        const instructorRating = form.elements['instructorRating'].options[form.elements['instructorRating'].selectedIndex].textContent;
        createSummaryItem('Instructor Rating', instructorRating);

  
        const assignmentsHelpful = formData.get('assignmentsHelpful') || 'Not answered';
        createSummaryItem('Assignments Helpful', assignmentsHelpful.charAt(0).toUpperCase() + assignmentsHelpful.slice(1));
        

        const selectedTopics = [];
        formData.getAll('topics').forEach(topic => {

            const label = document.querySelector(`label[for="${topic}"]`).textContent;
            selectedTopics.push(label);
        });
        createSummaryItem('Topics of Interest', selectedTopics.length > 0 ? selectedTopics.join(', ') : 'None selected');

        
        const paceRating = formData.get('paceRating');
        createSummaryItem('Course Pace', `${paceRating} (1=Slow, 5=Fast)`);

     
        const comments = formData.get('feedbackComments').trim();
        if (comments) {
            createSummaryItem('Comments Snippet', `"${comments.substring(0, 50)}..."`);
        }
        
  
        confirmationState.querySelector('h2').focus();
    }
    
   
    function createSummaryItem(label, value) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${label}:</strong> ${value}`;
        summaryList.appendChild(listItem);
    }
});
