<?php
    // header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type, authorization");

    class Config {
        protected $host = 'localhost';
        protected $username = 'root';
        protected $password = '';
        protected $dbName = 'learn_well';
        

        // protected $host = 'localhost';
        // protected $username = 'bayoadeyinka_dorcas';
        // protected $password = 'dorcasodunola1234';
        // protected $dbName = 'bayoadeyinka_sqi_portal';
        public $con = '';
        public $response = [];

        // Constructor(Making Connection)
        public function __construct() {
            $this->con = new mysqli($this->host, $this->username, $this->password, $this->dbName);
            if ($this->con->connect_error) {
                // echo "Can't connect";
                die("Unable to Connect". $this->con->connect_error);
            }
        }

        public function getConnection () {
            return $this->con;
        }

        // Function for inserting to db
        public function insert($query, $binder) {
            $stmt = $this->con->prepare($query);
            $stmt->bind_param(...$binder);
            if ($stmt->execute()) {
                $this->response['id'] = $this->con->insert_id;
                $this->response['true'] = true;
                return $this->response;
            } else {
                return false;
            }
        }

         // Function to Selecting from db without binder
        public function select($query) {
            $stmt = $this->con->prepare($query);
            if ($stmt->execute()) {
               $fetch = $stmt->get_result();
               $this->response['true'] = true;
               $this->response['fetched'] = $fetch;
               return $this->response;
            } else {
               return false;
            }
        }
        // Function to Select with binder
        public function selectSome($query, $binder) {
            $stmt = $this->con->prepare($query);
            $stmt->bind_param(...$binder);
            if ($stmt->execute()) {
               $fetch = $stmt->get_result();
               $this->response['true'] = true;
               $this->response['fetched'] = $fetch;
               return $this->response;
            } else {
               return false;
            }
            
        }
        // Function for deleting
        public function delete($query, $binder) {
            $stmt = $this->con->prepare($query);
            $stmt->bind_param(...$binder);
            if ($stmt->execute()) {
               return true;
            } else {
                return false;
            }
        }

        // Function performing update
        public function update($query, $binder) {
            $stmt = $this->con->prepare($query);
            $stmt->bind_param(...$binder);
            if ($stmt->execute()) {
               return true;
            } else {
                return false;
            }
        }
    }



?>