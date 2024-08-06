# Terraform Cheatsheet

## Initialization

`terraform init`

## Plan

`terraform plan`

## Apply

`terraform apply`

## Destroy

`terraform destroy`

## Modules

```
module "example" {
source = "./module"
param = "value"
}
```

## Variables

```
variable "example_var" {
type = string
default = "default_value"
}
```

## Outputs

```
output "example_output" {
  value = module.example.output
}
```

## Provisioners

```
resource "null_resource" "example" {
  provisioner "local-exec" {
    command = "echo ${var.example_var}"
  }
}
```

## State Management

```
terraform state list
terraform state show <resource>
terraform state rm <resource>
terraform state mv <resource> <new_resource>
```

## Workspaces

```
terraform workspace list
terraform workspace new <workspace_name>
terraform workspace select <workspace_name>
terraform workspace delete <workspace_name>
```
