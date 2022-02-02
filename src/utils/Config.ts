// Development + Production configurations
class Config {
    // public supportPhone = "031234567";
}

// Development configuration:
class DevelopmentConfig extends Config {
    public employeesUrl = "http://localhost:3030/api/employees/";
    public employeesImageUrl = "http://localhost:3030/api/employees/images/";
}

// Production configuration:
class ProductionConfig extends Config {
    public employeesUrl = "http://localhost:3030/api/employees/";
    public employeesImageUrl = "http://localhost:3030/api/employees/images/";

  //  public employeesImageUrl = "http://www.northwind.com/api/products/images/";
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;