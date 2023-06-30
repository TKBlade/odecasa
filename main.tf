provider "aws" {
  region = "sa-east-1"   # Substitua pela região desejada da AWS
}

data "aws_instances" "existing_instances" {
  instance_tags = {
    Name = "ExampleInstance"
  }
}

data "aws_codedeploy_app" "existing_app" {
  name = "g2-odecasa-dev"
}

resource "aws_codedeploy_deployment_group" "deploygroup1" {
  app_name               = data.aws_codedeploy_app.existing_app.name
  deployment_group_name  = "back-prod"
  deployment_config_name = "CodeDeployDefault.AllAtOnce"
  service_role_arn       = "arn:aws:iam::405378853534:role/GP2-User"

  ec2_tag_set {
    ec2_tag_filter {
      key   = "DEV-BACK-DEPLOY-GP2"
      type  = "KEY_ONLY"
    }
  }
}
