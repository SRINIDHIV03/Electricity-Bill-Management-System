document.addEventListener('DOMContentLoaded', function () {
    const tableArea = document.getElementById('tablearea');
    
    // Function to generate random user details
    function generateRandomUser() {
        const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
        const addresses = ["456 Avenue, Town", "789 Road, Village", "101 Street, City", "202 Lane, Suburb", "303 Boulevard, County"];
        const phones = ["111-222-3333", "444-555-6666", "777-888-9999", "123-456-7890", "987-654-3210"];
        const tariffPlans = ["Tariff Plan A", "Tariff Plan B", "Tariff Plan C"];
        const schemes = ["Scheme X", "Scheme Y", "Scheme Z"];
        
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomAddress = addresses[Math.floor(Math.random() * addresses.length)];
        const randomPhone = phones[Math.floor(Math.random() * phones.length)];
        const randomTariffPlan = tariffPlans[Math.floor(Math.random() * tariffPlans.length)];
        const randomScheme = schemes[Math.floor(Math.random() * schemes.length)];
        
        return {
            name: randomName,
            address: randomAddress,
            phone: randomPhone,
            tariffPlan: randomTariffPlan,
            scheme: randomScheme
        };
    }
    
    // Function to create user details HTML
    // Function to create user details HTML
// Function to create user details HTML
function createUserDetails(user) {
    const userDetails = document.createElement('div');
    userDetails.classList.add('user-details');
    
    userDetails.innerHTML = `
        <p>Account ID: <span class="account-id">${Math.floor(Math.random() * 100000)}</span></p>
        <div class="additional-info" style="display: none;">
            <p>Name: <input type="text" class="name" value="${user.name}" readonly></p>
            <p>Address: <input type="text" class="address" value="${user.address}" readonly></p>
            <p>Phone: <input type="text" class="phone" value="${user.phone}" readonly></p>
            <p>Tariff ID: 
                <select class="tariff-id" disabled>
                    <option value="1">${user.tariffPlan}</option>
                    <option value="2">Tariff Plan 2</option>
                    <option value="3">Tariff Plan 3</option>
                </select>
            </p>
            <p>Scheme ID: 
                <select class="scheme-id" disabled>
                    <option value="1">${user.scheme}</option>
                    <option value="2">Scheme 2</option>
                    <option value="3">Scheme 3</option>
                </select>
            </p>
            <p>Credit/Debit: <input type="text" class="credit-debit" value="$100" readonly></p>
            <p>Connection Status: 
                <label><input type="radio" class="connection-status" name="connection-status" value="Active" readonly disabled checked> Active</label>
                <label><input type="radio" class="connection-status" name="connection-status" value="Inactive" readonly disabled> Inactive</label>
            </p>
        </div>
        <div class="options">
            <button class="expand-btn">Expand</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    
    return userDetails;
}
    
    // Function to handle expand button click
    function expandButtonClickHandler() {
        const additionalInfo = this.closest('.user-details').querySelector('.additional-info');
        additionalInfo.style.display = additionalInfo.style.display === 'none' ? 'block' : 'none';
        this.textContent = additionalInfo.style.display === 'none' ? 'Expand' : 'Close';
    }
    
    // Function to handle edit button click
    function editButtonClickHandler() {
        const userDetails = this.closest('.user-details');
        const inputs = userDetails.querySelectorAll('.additional-info input[type="text"]');
        const selects = userDetails.querySelectorAll('.additional-info select');
        const radios = userDetails.querySelectorAll('.additional-info input[type="radio"]');
        
        inputs.forEach(input => {
            if (!input.classList.contains('credit-debit')) {
                input.readOnly = !input.readOnly;
            }
        });
        
        selects.forEach(select => {
            select.disabled = !select.disabled;
        });
        
        radios.forEach(radio => {
            radio.disabled = !radio.disabled;
        });
        
        this.textContent = inputs[0].readOnly ? 'Edit' : 'Update';
    }
    
    // Function to handle delete button click
    function deleteButtonClickHandler() {
        const userDetails = this.closest('.user-details');
        userDetails.remove();
    }
    
    // Generate and append five random user details
    for (let i = 1; i <= 5; i++) {
        const randomUser = generateRandomUser();
        const userDetails = createUserDetails(randomUser);
        tableArea.appendChild(userDetails);
    }
    
    // Add event listeners for expand buttons
    const expandButtons = document.querySelectorAll('.expand-btn');
    expandButtons.forEach(btn => {
        btn.addEventListener('click', expandButtonClickHandler);
    });
    
    // Add event listeners for edit buttons
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(btn => {
        btn.addEventListener('click', editButtonClickHandler);
    });
    
    // Add event listeners for delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', deleteButtonClickHandler);
    });
});
